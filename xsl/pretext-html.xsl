<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:import href="./core/pretext-html.xsl" />




<!-- Remove QR codes for interactive links -->
<!-- <xsl:template match="*" mode="static-qr"/> -->


<!-- Hack solution-list to display nicer headers -->
<xsl:template match="exercises" mode="backmatter">
    <!-- see if an "exercises" section has any solutions -->
    <xsl:variable name="nonempty" select="(.//hint and $exercise.backmatter.hint='yes') or
                                          (.//answer and $exercise.backmatter.answer='yes') or
                                          (.//solution and $exercise.backmatter.solution='yes')" />

    <xsl:if test="$nonempty='true'">
        <section class="exercises" id="">
            <h1 class="heading">
                <span class="type">Solutions for Section </span>
                <span class="codenumber"><xsl:apply-templates select="parent::*" mode="number" /></span>
                <!-- <span class="title"><xsl:apply-templates select="." mode="title-full" /></span> -->
            </h1>
            <!-- ignore introduction, conclusion, exercise groups -->
            <xsl:apply-templates select=".//exercise" mode="backmatter" />
        </section>
    </xsl:if>
</xsl:template>


<!-- Print exercises with some solution component -->
<!-- Respect switches about visibility            -->
<xsl:template match="exercise" mode="backmatter">
    <xsl:if test="answer or solution"><!-- Removed "hint or" -->
        <!-- Lead with the problem number and some space -->
        <xsl:variable name="xref">
            <xsl:apply-templates select="." mode="internal-id" />
        </xsl:variable>
        <article class="exercise-like" id="{$xref}">
            <h5 class="heading hidden-type">
            <!-- <span class="type"><xsl:apply-templates select="." mode="type-name" /></span> -->
            <span class="codenumber"><xsl:apply-templates select="." mode="number" /></span>
            <xsl:if test="title">
                <span class="title"><xsl:apply-templates select="." mode="title-full" /></span>
            </xsl:if>
            </h5>
            <!-- default templates will produce inline knowls -->
            <span class="hidden-knowl-wrapper">
              <xsl:if test="$exercise.backmatter.statement='yes'">
                <xsl:apply-templates select="statement" />
              </xsl:if> <!-- moved first one down -->
                <xsl:if test="hint and $exercise.backmatter.hint='yes'">
                    <xsl:apply-templates select="hint" />
                </xsl:if>
                <xsl:if test="answer and $exercise.backmatter.answer='yes'">
                    <xsl:apply-templates select="answer" />
                </xsl:if>
                <xsl:if test="solution and $exercise.backmatter.solution='yes'">
                    <xsl:apply-templates select="solution" />
                </xsl:if>
            </span>
        </article>
    </xsl:if>
</xsl:template>


</xsl:stylesheet>